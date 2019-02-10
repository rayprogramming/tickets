<template>
<v-dialog v-model="dialog" max-width="500px">
    <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
    <v-card>
        <v-card-title>
            <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.name" label="Subject"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            }
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        }
    },

    watch: {
        dialog(val) {
            val || this.close()
        }
    },
    methods: {
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },

        close() {
            this.dialog = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        }
    }
}
</script>

<style lang="css" scoped>
</style>
