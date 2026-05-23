# grrs

A minimal `grep`-like CLI tool written in Rust — search for a pattern in a file and print matching lines.

## Usage

```bash
cargo run -- <pattern> <path>
```

### Example

```bash
cargo run -- main src/main.rs
```

This reads `src/main.rs` and prints every line that contains `main`.

## Installation

```bash
cargo install --path .
```

Then run from anywhere:

```bash
grrs <pattern> <path>
```

## How it works

`grrs` uses [`clap`](https://crates.io/crates/clap) to parse two required arguments — a search `pattern` and a file `path`. It reads the file into memory and iterates over its lines, printing those that contain the pattern.

## Current state

Early prototype. Core functionality works. No tests yet. A line-by-line buffered reader optimization is planned (commented out in source).
