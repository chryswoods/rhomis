
from dataclasses import dataclass as _dataclass
from typing import List as _List
from typing import Dict as _Dict

from ._module import Module
from ._category import Category
from ._sdg import SDG
from ._language import Language

__all__ = ["Modules"]


@_dataclass
class Modules:
    #: Valid categories for modules in this set
    categories: _List[Category] = None

    #: The list of all modules
    modules: _List[Module] = None

    #: The list of all languages
    languages: _List[Language] = None

    #: The list of all SDGs
    sdgs: _List[SDG] = None

    #: lookup dictionary for categories
    _name_to_category: _Dict[str, int] = None

    #: lookup dictionary for SDGs
    _number_to_sdg: _Dict[int, int] = None

    #: lookup dictionary for languages
    _code_to_language: _Dict[str, int] = None

    def add_sdg(self, sdg: SDG) -> None:
        """Add a valid SDG"""
        if not isinstance(sdg, SDG):
            raise TypeError("Can only add a SDG")

        sdg.assert_sane()

        if sdg.is_null():
            return

        if self.sdgs is None:
            self.sdgs = []
            self._number_to_sdg = {}

        assert sdg.number not in self._number_to_sdg

        self.sdgs.append(sdg)
        self._number_to_sdg[sdg.number] = len(self.sdgs) - 1

    def add_category(self, category: Category) -> None:
        """Add a valid category for the modules"""
        if not isinstance(category, Category):
            raise TypeError("Can only add a Category")

        category.assert_sane()

        if category.is_null():
            return

        if self.categories is None:
            self.categories = []
            self._name_to_category = {}

        assert category.name not in self._name_to_category

        self.categories.append(category)
        self._name_to_category[category.name] = len(self.categories) - 1

    def add_language(self, language: Language) -> None:
        """Add a valid language for the modules"""
        if not isinstance(language, Language):
            raise TypeError("Can only add a Language")

        language.assert_sane()

        if language.is_null():
            return

        if self.languages is None:
            self.languages = []
            self._code_to_language = {}

        assert language.code not in self._code_to_language

        self.languages.append(language)
        self._code_to_language[language.code] = len(self.languages) - 1

    def append(self, module: Module) -> None:
        if not isinstance(module, Module):
            raise TypeError("Can only append a Module")

        module.assert_sane()

        if module.is_null():
            return

        if self.modules is None:
            self.modules = []

        assert module.category in self._name_to_category

        for sdg in module.sdgs:
            assert sdg in self._number_to_sdg

        for language in module.languages:
            assert language in self._code_to_language

        self.modules.append(module)

    def toDry(self):
        if len(self.modules) == 0:
            return {}

        return {"categories": self.categories,
                "sdgs": self.sdgs,
                "languages": self.languages,
                "modules": self.modules}

    def to_json(self, indent=None):
        from ._dry import stringify
        return stringify(self, indent=indent)
