import pathlib
import subprocess


def bundle():
    pathlib.Path("dist").mkdir(exist_ok=True)
    temper_out = "../temper-syntax/temper.out"
    subprocess.run(
        [
            "stickytape",
            "./temper_pygments/__init__.py",
            *("--output-file", "./dist/temper_pygments.py"),
            *("--add-python-path", f"{temper_out}/temper-syntax/py/"),
            *("--add-python-path", f"{temper_out}/temper-core/py/"),
            *("--add-python-path", "."),
        ]
    )
