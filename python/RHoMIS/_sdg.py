
from dataclasses import dataclass as _dataclass

__all__ = ["SDG"]


@_dataclass
class SDG:
    """A strategic development goal"""

    #: Identifying number
    number: int = None

    #: Description
    description: str = None

    #: Color (hexcolor)
    color: str = None

    #: Logo
    logo: str = None

    def is_null(self) -> bool:
        return self.number is None

    def assert_sane(self) -> None:
        if self.number is None:
            self = SDG()

        self.number = int(self.number)
        assert self.number > 0

        assert self.description is not None
        self.description = str(self.description)

        assert self.color is not None
        self.color = str(self.color)

        assert self.logo is not None
        self.logo = str(self.logo)
