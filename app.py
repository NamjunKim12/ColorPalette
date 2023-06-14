from flask import Flask, render_template, request

app = Flask(__name__,
    template_folder='templates',
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/palette", method=["POST"])
def prompt_to_palette():
    # TODO : OPEN AI Completion call 호출부 작성
    return ''

if __name__ == "__main__":
    app.run(debug=True)
