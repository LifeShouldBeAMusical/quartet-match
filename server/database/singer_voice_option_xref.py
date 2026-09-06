"""Singer/Voice Option XRef Table"""

from sqlalchemy import Column, ForeignKey, Table

from database.base import ModelBase

singer_voice_option_xref = Table(
    "singer_voice_option_xref",
    ModelBase.metadata,
    Column(
        "singer_id",
        ForeignKey("singer.id", None, False, "foreign_singer_id"),
        primary_key=True,
    ),
    Column(
        "voice_option_id",
        ForeignKey("voice_option.id", None, False, "foreign_voice_id"),
        primary_key=True,
    ),
)
"""Singer/Voice Option XRef Table"""
