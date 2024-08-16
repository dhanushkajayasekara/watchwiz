<template>
    <v-row>
        <v-col cols="12" sm="4" class="d-flex align-stretch">
            <v-img
                :src="`https://picsum.photos/200/300?image=65`"
                rounded="lg"
                cover
                max-height="400"
            ></v-img>
        </v-col>
        <v-col cols="12" sm="8" class="d-flex flex-column">
            <v-row>
                <v-col cols="12" align="end">
                    <v-btn
                        class="text-none"
                        :prepend-icon="
                            interested ? 'mdi-bookmark' : 'mdi-bookmark-outline'
                        "
                        :variant="interested ? 'tonal' : 'outlined'"
                        :color="interested ? 'success' : 'default'"
                        @click="() => (interested = !interested)"
                    >
                        {{ !interested ? "Add to " : "" }}Interested
                    </v-btn>
                </v-col>
                <v-col cols="12">
                    <h1>A Quiet Place</h1>
                </v-col>
                <v-col cols="12">
                    <v-chip color="default" size="small"> 90 min </v-chip>
                    <v-chip class="mx-2" color="success" size="small">
                        2018
                    </v-chip>
                    Drama, Horror, Sci-Fi
                </v-col>
                <v-col cols="12">
                    <v-chip color="info" size="small"> Directed By </v-chip>
                    John Krasinski
                </v-col>
                <v-col cols="12">
                    <v-chip color="info" size="small"> Written By </v-chip>
                    Bryan Woods, Scott Beck, John Krasinski
                </v-col>
                <v-col cols="12">
                    <v-chip color="info" size="small"> Actors </v-chip>
                    Emily Blunt, John Krasinski, Millicent Simmonds
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <hr class="my-3" />
    <v-row>
        <v-col cols="12">
            <p>
                In a devastated Earth overrun by invincible predators of a
                possible extraterrestrial origin, the Abbotts find themselves
                struggling to survive in the isolation of upstate New York,
                defined by a new era of utter silence. Indeed, as this new type
                of invader is attracted to noise, even the slightest of sounds
                can be deadly; however, it's been already twelve months since
                the powerful monsters' first sightings, and this resilient
                family still stands strong. Of course, learning the rules of
                survival in this muted dystopia is essential; nevertheless, now,
                of all times, an otherwise joyous event puts in jeopardy the
                already fragile stability. And now, more than ever, the Abbotts
                must not make a sound.
            </p>
        </v-col>
    </v-row>
    <hr class="my-3" />
    <v-row>
        <v-col cols="12" sm="4">
            <v-card
                variant="outlined"
                class="mx-auto"
                color="success"
                subtitle="IMDB Rating"
                title="7.5/10"
                hover
                rounded="lg"
            >
            </v-card>
        </v-col>
        <v-col cols="12" sm="4">
            <v-card
                variant="outlined"
                class="mx-auto"
                color="error"
                subtitle="Rotten Tomatoes"
                title="96%"
                hover
                rounded="lg"
            >
            </v-card>
        </v-col>
        <v-col cols="12" sm="4">
            <v-card
                variant="outlined"
                class="mx-auto"
                color="error"
                subtitle="Metacritic"
                title="82/100"
                hover
                rounded="lg"
            >
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from "vue";

const interested = ref(false);
</script>

<style lang="scss" scoped>
.col-content {
    max-height: none;
    overflow-y: auto;
}

@media (max-width: 960px) {
    .col-content {
        max-height: 500px;
    }
}
</style>
