
from dataclasses import dataclass as _dataclass
from typing import List as _List

__all__ = ["Module"]


@_dataclass
class Module:
    """A module in the RHoMIS survey"""

    #: Name of the survey module
    name: str = None

    #: Number of the module
    number: int = None

    #: Filename of the logo for this module
    logo: str = None

    #: Category of this module
    category: str = None

    #: type of this module (core, optional etc.)
    module_type: str = None

    #: Description text for this module
    description: str = None

    #: List of topics for this module
    topics: _List[str] = None

    #: SDGs tackled by this module
    sdgs: _List[int] = None

    #: How long this module should take to complete in minutes
    duration: int = None

    # Languages available for this module
    languages: _List[str] = None

    def is_null(self) -> bool:
        return self.name is None

    def assert_sane(self) -> None:
        """Assert that this module is sane"""
        if self.name is None:
            self = Module()
            return

        assert self.number is not None

        self.number = int(self.number)
        assert self.number > 0

        assert self.logo is not None
        self.logo = str(self.logo)

        assert self.category is not None
        self.category = str(self.category)

        assert self.module_type in ["CORE", "ADDITIONAL"]

        assert self.description is not None
        self.description = str(self.description)

        assert self.topics is not None
        self.topics = [str(x) for x in self.topics]
        assert len(self.topics) > 0

        assert self.sdgs is not None
        self.sdgs = [int(x) for x in self.sdgs]

        for sdg in self.sdgs:
            assert sdg > 0

        assert self.duration is not None
        self.duration = int(self.duration)
        assert self.duration > 0

        assert self.languages is not None
        self.languages = [str(x) for x in self.languages]
        assert len(self.languages) > 0

    def toDry(self):
        self.assert_sane()

        if self.is_null():
            return {}

        return {"name": self.name,
                "number": self.number,
                "logo": self.logo,
                "category": self.category,
                "module_type": self.module_type,
                "description": self.description,
                "topics": self.topics,
                "sdgs": self.sdgs,
                "duration": self.duration,
                "languages": self.languages}
