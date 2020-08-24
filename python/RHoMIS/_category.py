
from dataclasses import dataclass as _dataclass

__all__ = ["Category"]


@_dataclass
class Category:
    """A module category"""

    #: Name of the category (also the identifier)
    name: str = None

    #: Color for the category (hex color)
    color: str = None

    def is_null(self) -> bool:
        return self.name is None

    def assert_sane(self) -> None:
        if self.name is None:
            self = Category()

        self.name = str(self.name)

        assert self.color is not None
        self.color = str(self.color)
