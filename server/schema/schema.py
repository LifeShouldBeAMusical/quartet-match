"""Schema"""

from strawberry import Schema

from schema.query import Query

schema = Schema(query=Query)
