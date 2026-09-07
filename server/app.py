"""Main Application"""

import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter
import uvicorn

from schema import schema

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    # Set port based on environment variable, with a default of 8000
    port = int(os.getenv("PORT", "8000"))

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port,
        ssl_keyfile="./ssl/privkey.pem",
        ssl_certfile="./ssl/fullchain.pem",
    )


@app.get("/")
def read_root():
    """Root"""
    return {"message": "Quartet Match API"}


app.include_router(GraphQLRouter(schema=schema), prefix="/graphql")
