<script setup lang="ts">
import { reactive, computed, ref } from "vue";
import Input from "./Input.vue";
import Button from "./Button.vue";

//add reactive object for review
const review = reactive({
  text: "",
  photos: [],
  author: "asdfasd",
  rating: null,
});

const onSubmit = () => {
  console.log(review);
};

const uploadFile = (e: Event & { target: HTMLInputElement }) => {
  console.log(e.target.files);

  review.photos.push(e.target.files[0]);
};

const previewFileUrl = computed(() => {
  return review.photos.length === 0
    ? "#"
    : URL.createObjectURL(review.photos[0]);
});

const author = reactive({
  name: "Тарас Шевченко",
  books: [],
});

// обчислювана властивість - ref
const publishedBooksMessage = computed(() =>
  author.books.length > 0 ? "Книги" : "Немає книг"
);

const addBook = (name: string) => {
  author.books.push(name);
};

const clear = () => {
  (review.text = ""), (review.author = "");
};

const deleteBook = () => {
  console.log("hello world");
  author.books.pop();
};

const selected = ref("А");

const options = ref([
  { text: "Один", value: "Б" },
  { text: "Два", value: "В" },
  { text: "Три", value: "Г" },
]);
</script>

<template>
  <ul>
    <li v-for="n in 10" :key="n">{{ n }}</li>
  </ul>
  <p>Має опубліковані книги:</p>
  <span>{{ publishedBooksMessage }}</span>
  <button @click="addBook('bebra')">Додати книгу</button>
  <button @click="deleteBook">Видалити книгу</button>

  <p>Сьогодні: {{ Date.now() }}</p>

  <form @submit.prevent="onSubmit">
    <input placeholder="Введите свое имя" type="text" v-model="review.author" />

    <input type="file" multiple @change="uploadFile" />

    <img :style="{ width: '200px' }" :src="previewFileUrl" alt="" />

    <Input
      :class="{ active: review.photos.length }"
      type="textarea"
      v-model="review.text"
      placeholder="Введите отзыв"
    />

    <div>Вибрано: {{ selected }}</div>

    <select v-model="selected">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <button type="button" @click="clear">CLEAR</button>
  </form>
</template>
