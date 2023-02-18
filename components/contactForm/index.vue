<template>
    <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 p-4">
            <h2>Contact us</h2>
            <p>Av. de les Tres Creus, 2, 46014 València, Valencia, Spain</p>
            <p>btelabvalencia@gmail.com</p>
            <p>963 131 893</p>
        </div>
        <div class="w-full lg:w-1/2 p-4">
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="name" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" required />
                </div>
                <div>
                    <label for="title">Title:</label>
                    <input type="text" id="title" v-model="title" required/>
                </div>
                <div>
                    <label for="text">Text:</label>
                    <textarea id="text" v-model="text" required></textarea>
                </div>
                <button @click.prevent="submitForm">Submit</button>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name: "ContactForm",
    data() {
        return {
            name: '',
            email: '',
            title: '',
            text: ''
        };
    },
    methods: {
        submitForm() {

            if (!this.name || !this.email || !this.title || !this.text) {
                alert('Please fill all the fields');
                return;
            }
            
            const mailto = `mailto:btelabvalencia@gmail.com?subject=${encodeURIComponent(this.title)}&body=From%3A%20${encodeURIComponent(this.name)}%20%28${encodeURIComponent(this.email)}%29%0D%0A%0D%0A${encodeURIComponent(this.text)}`;
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