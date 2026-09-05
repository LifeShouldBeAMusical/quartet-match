"""Singer Table"""

from datetime import datetime
from typing import Optional

from sqlalchemy import Boolean, Date, ForeignKey, Integer, String, and_, not_
from sqlalchemy.orm import Mapped, mapped_column, relationship

from database.base import ModelBase


class SingerModel(ModelBase):
    """Singer Table"""

    __tablename__ = "singer"

    id: Mapped[int] = mapped_column("id", Integer, primary_key=True, autoincrement=True)
    """ID"""

    # Name
    first_name: Mapped[str] = mapped_column("first_name", String, nullable=False)
    """First Name"""
    last_name: Mapped[str] = mapped_column("last_name", String, nullable=False)
    """Last Name"""

    def __init__(self, first_name: str, last_name: str):
        self.first_name = first_name
        self.last_name = last_name

    def __str__(self) -> str:
        return (
            "SingerModel("
            + f"id={self.id}, "
            + f"first_name={self.first_name}, "
            + f"last_name={self.last_name}"
            + ")"
        )
