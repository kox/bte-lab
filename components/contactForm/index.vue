<template>
    <div id="contact">

        <div class="w-full flex flex-col bg-white pt-72 pb-20">
            <div class="container mx-auto px-4">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div class="p4 text-center md:pr-16">
                        <h2
                            class="font-futura text-3xl md:text-5xl font-semibold pb-10 md:pb-12 tracking-tight justify-center antialiased">
                            Contact us
                        </h2>

                        <p class="font-avenir text-sm tracking-bit antialiased mb-8 font-thin">Av. de les Tres Creus, 2,
                            46014
                            València,
                            Valencia, Spain</p>
                        <p class="font-avenir text-sm tracking-bit antialiased mb-8 font-thin"><a
                                href="mailto:example@btelabvalencia@gmail.com font-thin">btelabvalencia@gmail.com</a></p>
                        <p class="font-avenir text-sm tracking-bit antialiased font-thin"><a href="tel:+963131893">963 131
                                893</a></p>
                    </div>

                    <form :onsubmit="submitForm">
                        <div class="grid grid-cols-2 gap-4 md:pl-16 pt-24 md:pt-0">

                            <div class="col-span-2 md:col-span-1">
                                <label class="block">
                                    <span class="font-avenir text-black antialiased font-thin">Name *</span>
                                    <input type="text" placeholder="Enter your name" v-model="form.name" required class="mt-0 pb-0 font-avenir font-normal text-sm block
                                               w-full
                                                px-0.5
                                                border-0 border-b-2 border-black
                                                focus:ring-0 focus:border-black focus:border-2"></label>
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block">
                                    <span class="font-avenir text-black antialiased font-thin">Email *</span>
                                    <input type="email" placeholder="Enter your email" v-model="form.email" required class="mt-0 pb-0 font-avenir font-normal text-sm block
                                                w-full
                                                px-0.5
                                                border-0 border-b-2 border-black
                                                focus:ring-0 focus:border-black focus:border-2" /></label>
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block">
                                    <span class="font-avenir text-black antialiased font-thin">Phone</span>
                                    <input type="text" placeholder="Enter your phone" v-model="form.phone" class="mt-0 pb-0 font-avenir font-normal text-sm block
                                                w-full
                                                px-0.5
                                                border-0 border-b-2 border-black
                                                focus:ring-0 focus:border-black focus:border-2" /></label>
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block">
                                    <span class="font-avenir text-black antialiased font-thin">Address</span>
                                    <input type="text" placeholder="Enter your address" v-model="form.address" class="mt-0 pb-0 block font-normal font-avenir text-sm
                                                w-full
                                                px-0.5
                                                border-0 border-b-2 border-black
                                                focus:ring-0 focus:border-black focus:border-2" /></label>
                            </div>
                            <div class="col-span-2">
                                <label class="block">
                                    <span class="font-avenir text-black antialiased font-thin">Subject *</span>
                                    <input type="text" placeholder="Enter your subject" v-model="form.subject" required
                                        class="mt-0 pb-0 block font-avenir font-normal text-sm
                                                w-full
                                                px-0.5
                                                border-0 border-b-2 border-black
                                                focus:ring-0 focus:border-black focus:border-2" /></label>
                            </div>
                            <div class="col-span-2">
                                <label class="block">
                                    <span class="font-avenir text-black antialiased font-thin">Message *</span>
                                    <textarea name="message" placeholder="Enter your message here" cols="40" rows="3" v-model="form.message" class="mt-0 pb-0 block font-avenir font-normal text-sm
                                                        w-full
                                                        px-0.5
                                                        border-0 border-b-2 border-black
                                                        focus:ring-0 focus:border-black focus:border-2"></textarea></label>
                            </div>
                            <div class="col-span-2">
                                <button type="submit" @click="submitForm"
                                    class="w-full font-avenir text-sm bg-black text-white font-thin py-2 px-4 rounded mt-4">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactForm",
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                address: '',
                subject: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {

            console.log(this.form);

            if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
                alert('Please fill all required fields');
                return;
            }

            console.log(this.form);

            const mailto = `mailto:btelabvalencia@gmail.com?subject=${encodeURIComponent(this.form.subject)}&body=From%3A%20${encodeURIComponent(this.form.name)}%20%28${encodeURIComponent(this.form.email)}%29%0D%0A%0D%0A${encodeURIComponent(this.form.message)}%29%0D%0A%0D%0A${encodeURIComponent(this.form.phone)}%29%0D%0A%0D%0A${encodeURIComponent(this.form.address)}`;
            window.location.href = mailto;
        }
    }
};
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
}

label {
    font-weight: bold;
}

input,
textarea {
    padding: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid gray;
}

button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>