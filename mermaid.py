import subprocess
import typer
import os
from pathlib import Path
from rich import print
from typing import List, Annotated

app = typer.Typer(add_completion=False)
MERMAID_FILES_DIR = Path(".") / "lib" / "mermaid_files"
DIAGRAMS_DIR = Path(".") / "public" / "mermaid_diagrams"


def get_sorted_files():
    sorted_files = sorted(
        MERMAID_FILES_DIR.iterdir(),
        key=lambda file: os.path.getmtime(file),
        reverse=True,
    )
    filtered_list: List[Path] = []
    for file in sorted_files:
        if file.suffix == ".mmd":
            filtered_list.append(file)
    return filtered_list


def get_last_modified_file():
    return get_sorted_files()[0].name


def print_existing_files():
    print("The existing mermaid_files are:")
    for i, file in enumerate(get_sorted_files()):
        print(
            f"{i + 1}. [bold green]{file.name}[/bold green] {'(last modified)' if i == 0 else ''}"
        )


@app.command()
def export(
    basename: Annotated[
        str, typer.Argument(help="The basename of the mermaid file.")
    ] = get_last_modified_file(),
):
    """
    Export BASENAME (.mmd file) to a vector (.svg file).

    BASENAME is a file in /lib/mermaid_files, and the exported vector will be placed in /public/mermaid_diagrams.

    By default, the last modified .mmd file will be exported.
    """

    exporting_file = MERMAID_FILES_DIR / basename
    if basename != "" and not exporting_file.exists():
        print(f'Sorry! The file "[bold green]{basename}[/bold green]" does not exist.')
        print_existing_files()
    else:
        subprocess.run(
            [
                "pnpm",
                "mmdc",
                "-i",
                exporting_file.resolve(),
                "-o",
                (DIAGRAMS_DIR / basename).with_suffix(".svg"),
                "-b",
                "transparent",
            ]
        )


@app.command()
def list():
    """
    List the existing .mmd files.
    """
    print_existing_files()


if __name__ == "__main__":
    app()
