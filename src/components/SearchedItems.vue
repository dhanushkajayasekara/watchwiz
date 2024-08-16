<template>
    <v-row>
        <v-col cols="12" sm="12" md="6" lg="4" v-for="n in 4" :key="n">
            <v-img
                rounded="lg"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                :src="`https://picsum.photos/200/300?image=${n * 5 + 10}`"
                cover
                hover
            ></v-img>
            <p>Title</p>
            <p>Year</p>
        </v-col>
    </v-row>
</template>
