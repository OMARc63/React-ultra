import React from "react";
import Footer from "../Footer/Footer";
import { ContactSection, Span, Title, Form, FormInput, InputText, InputEmail, Textarea, InputSubmit } from './style';

const Contact = () => {
    return (
        <React.Fragment>
            <ContactSection>
                <div class="container">
                    <Title><Span>Drop </Span>Me A line</Title>
                    <Form action="" >
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email" />
                        </FormInput>
                        <InputText sub type="text" placeholder="Your Subject" />
                        <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                        <InputSubmit type="submit" value="Send Message" />
                    </Form>
                </div>
            </ContactSection>
            <Footer />
        </React.Fragment>
    )
}

export default Contact;