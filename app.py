from flask import Flask, render_template, request
from email.mime.application import MIMEApplication
from flask_mail import Mail, Message
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


class Config(object):
    SECRET_KEY = '78w0o5tuuGex5Ktk8VvVDF9Pw3jv1MVC'


app = Flask(__name__)
app.config.from_object(Config)
mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'alexandr.jri.bystrov@gmail.com',
    "MAIL_PASSWORD": 'gfdmezsklffhthxm'
}

app.config.update(mail_settings)
mail = Mail(app)


def send_mail(__location__, user, inn, idd):
    smtpObj = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    smtpObj.ehlo()

    smtpObj.login("alexandr.jri.bystrov@gmail.com", "gfdmezsklffhthxm")
    me = 'alexandr.jri.bystrov@gmail.com'
    you = ['alexandr.jri.bystrov@gmail.com', user]
    msg = MIMEMultipart('alternative')
    msg['Subject'] = 'Заявка ТОРСЭД от %s' % inn
    msg['From'] = me
    msg['To'] = ", ".join(you)

    html = '<html><body><p>Пришла новая заявка на подключение к ТОРСЭД</p></body></html>'
    part2 = MIMEText(html, 'html')
    pdf = MIMEApplication(bytes(row[-1][-1]))
    pdf.add_header('Content-Disposition', 'attachment', filename="oferta_signed.pdf")
    msg.attach(pdf)
    msg.attach(part2)
    smtpObj.sendmail(me, you, msg.as_string().encode('utf-8'))
    smtpObj.quit()


@app.route('/', methods=['GET', 'POST'])
def landing():
    if request.method == 'POST':
        print('POST')
        print(request.form)
    return render_template('index.html')
