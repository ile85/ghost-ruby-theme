import ijson

def analyze_heap_snapshot(file_path):
    node_count = 0
    edge_count = 0
    total_size = 0
    node_types = {}
    edge_types = {}
    node_field_index = {}
    edge_field_index = {}

    with open(file_path, "r") as file:
        parser = ijson.parse(file)
        node = []
        edge = []
        current_field = None

        for prefix, event, value in parser:
            print(f"prefix: {prefix}, event: {event}, value: {value}")

            if prefix == "snapshot.meta.node_fields" and event == "start_array":
                current_field = "node_fields"
            elif prefix == "snapshot.meta.edge_fields" and event == "start_array":
                current_field = "edge_fields"
            elif event == "map_key":
                current_field = None

            if current_field == "node_fields":
                if event == "string":
                    node_field_index[value] = len(node_field_index)
            elif current_field == "edge_fields":
                if event == "string":
                    edge_field_index[value] = len(edge_field_index)

            if prefix.startswith("nodes.item") and event == "number":
                node.append(value)
                if len(node) == len(node_field_index):
                    node_count += 1
                    node_type = node[node_field_index["type"]]
                    node_size = node[node_field_index["self_size"]]
                    if node_type not in node_types:
                        node_types[node_type] = 0
                    node_types[node_type] += 1
                    total_size += node_size
                    node = []
            elif prefix.startswith("edges.item") and event == "number":
                edge.append(value)
                if len(edge) == len(edge_field_index):
                    edge_count += 1
                    edge_type = edge[edge_field_index["type"]]
                    if edge_type not in edge_types:
                        edge_types[edge_type] = 0
                    edge_types[edge_type] += 1
                    edge = []

    return {
        "node_count": node_count,
        "edge_count": edge_count,
        "total_size": total_size,
        "node_types": node_types,
        "edge_types": edge_types
    }

file_path = "/var/www/ghost/content/themes/ruby/heap_analysis/Heap-20240520T132247.heapsnapshot"

results = analyze_heap_snapshot(file_path)

print("Heap Snapshot Analysis:")
print(f"Total Nodes: {results['node_count']}")
print(f"Total Edges: {results['edge_count']}")
print(f"Total Size: {results['total_size']} bytes")
print("Node Types:")
for node_type, count in sorted(results["node_types"].items()):
    print(f"{node_type}: {count}")
print("Edge Types:")
for edge_type, count in sorted(results["edge_types"].items()):
    print(f"{edge_type}: {count}")
