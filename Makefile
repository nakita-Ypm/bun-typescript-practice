exe:
	bun run src/index.ts

test:
	bun test

# format
fmt:
	bunx biome format --write ./