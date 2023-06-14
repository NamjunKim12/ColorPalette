import openai
from flask import Flask, render_template, request
from dotenv import dotenv_values

config = dotenv_values(".env")
openai.api_key = config['OPENAI_API_KEY']

app = Flask(__name__,
            template_folder='templates',
            )


@app.route('/')
def index():
    response = openai.Completion.create(
        prompt="Give me a funny word: ",
        model="text-davinci-003",
    )

    return response["choices"][0]["text"]


@app.route("/palette", methods=["POST"])
def prompt_to_palette():
    # TODO : OPEN AI Completion call 호출부 작성
    return ''


if __name__ == "__main__":
    app.run(debug=True)
