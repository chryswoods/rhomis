
from dataclasses import dataclass as _dataclass

__all__ = ["Language"]


@_dataclass
class Language:
    #: Code for the language
    code: str = None

    #: Full name of the language
    name: str = None

    def is_null(self) -> bool:
        return self.code is None

    def assert_sane(self) -> None:
        if self.code is None:
            self = Language()
            return

        assert self.name is not None
        self.name = str(self.name)

    def toDry(self):
        self.assert_sane()

        if self.is_null():
            return {}

        return {"code": self.code,
                "name": self.name}
