from flask import Flask

# Membuat objek aplilkasi flask

app = Flask(__name__,
            static_url_path=' ',
            static_folder='web/static',
            template_folder='web/templates')

# Menentukan route untuk halaman utama

@app.route('/')
def hello_world():
    return 'Hello World!'

# Menjalankan aplikasi
if __name__ == '__main__':
    app.rum(debug = True)