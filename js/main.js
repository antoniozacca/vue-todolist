const { createApp } = Vue;
createApp({
    data() {
        return {
            todo: [
                {
                   text:  "Quarterly Newsletter",
                   done: true,
                   fonte: "Editorial"
                },
                {
                    text:  "Recruiting blog post",
                    done: true,
                    fonte: "Editorial"
                 },
                 {
                    text:  "Mobile app luaunch",
                    done: true,
                    fonte: "Q1 Goals"
                 },
                 {
                    text:  "Interview John H.",
                    done: false,
                    fonte: "Recruiting"
                 },
                 {
                    text:  "Summit update to mobile storefronts",
                    done: true,
                    fonte: "Mobile"
                 },
                 {
                    text:  "Schedule meeting with Alex",
                    done: false,
                 },
                 {
                    text:  "Homepage refresh",
                    done: true,
                    fonte: "Website"
                 },
                 {
                    text:  "Onboard new Sales team members",
                    done: true,
                    fonte: "Sales"
                 },
                 {
                    text:  "Review editorial calendar",
                    done: true,
                    fonte: "Editorial"
                 },
            ],
        };
    },
    methods: {
        deleteDati(index){
            this.todo.splice(index, 1)
        }
    }
}).mount("#app");