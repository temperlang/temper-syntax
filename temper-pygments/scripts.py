import pathlib
import subprocess


def bundle():
    out_dir = "dist"
    pathlib.Path(out_dir).mkdir(exist_ok=True)
    temper_out = "../temper-syntax/temper.out"
    subprocess.run(
        [
            *run("stickytape"),
            "./temper_pygments/__init__.py",
            *("--output-file", f"./{out_dir}/temper_pygments.py"),
            *("--add-python-path", f"{temper_out}/temper-syntax/py/"),
            *("--add-python-path", f"{temper_out}/temper-core/py/"),
            *("--add-python-path", "."),
        ]
    )


def test():
    subprocess.run([*run("python"), "-m", "unittest", "discover"])


def run(command: str):
    return ("poetry", "run", command)
