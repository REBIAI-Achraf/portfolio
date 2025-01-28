<template>
    <div className='container'>
        <div className='contact'>
            <h3>
                &lt;h3&gt; Contact Me &lt;/h3&gt;
            </h3>

            <div className='formular'>
                <form action="https://formsubmit.co/rebiaiachref@gmail.com" method="POST">
                    <label for="mail">Mail</label><br /><br />
                    <input type="email" name="email" placeholder="Email Address" /><br /><br />
                    <label for="fullname">Full-name</label><br /><br />
                    <input name="fullname" type="text" placeholder="type your full name " /><br />
                    <br />
                    <label for="subject">Subject</label><br /><br />
                    <input name="subject" type="text" placeholder="subject" /><br /><br />
                    <textarea name="message" placeholder="Message"></textarea><br /><br />
                    <input type="submit" value="Send" />
                    <input type="hidden" name="_template" value="table" />

                </form>
                <div className="image">

                    <img src="../assets/images/mail.png" alt="" />

                </div>

            </div>


        </div>



    </div>
</template>

<style>
.contact {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

}

.formular {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 20px;
    padding: 10px 30px;
    height: 85%;
    width: 90%;
    border: 1px solid #0099e0;
    border-radius: 20px;
}

form {
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 50%;
}

input,
textarea {
    margin: 15px 0;
    outline: none;
    width: 100%;
    border: 1px solid #0099e0;
    background-color: transparent;
    padding: 0 10px;
    color: white;
}

form input {
    height: 80px !important;


}

input[type="submit"] {
    height: 80px;
    color: black;
    border: 1px solid #0099e0;
    background-color: #0099e0;
    padding: 0 10px;
    color: white;
}

.contact .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 90%;
}

.image img {
    height: 70%;
}

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/* *******************************   Mobile screen   **************************************/

@media only screen and (max-width: 600px) {

    form {
        margin-top: 0px;
        display: flex;
        flex-direction: column;
        height: 90%;
        width: 100%;
    }

    form input {
        height: 80px !important;

    }

    .contact .image {
        display: none !important;

    }
}
</style>
