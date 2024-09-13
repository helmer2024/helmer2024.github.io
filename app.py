from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/productos')
def productos():
    return render_template('productos.html')  # Puedes crear una nueva página para productos.

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')  # Puedes crear una nueva página de contacto.

if __name__ == '__main__':
    app.run(debug=True)
