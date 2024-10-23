module.exports = function () {
    return {
        conservationAreas: [
            { 
                id: 1, 
                name: "Maple Ridge Conservation Area", 
                timeSlots: [
                    { slot: "9:00am - 12:00pm", available: true, price: 15 },
                    { slot: "12:00pm - 3:00pm", available: true, price: 15 },
                    { slot: "3:00pm - 6:00pm", available: true, price: 15 },
                ]
            },
            { 
                id: 2, 
                name: "Lakeview Conservation Area", 
                timeSlots: [
                    { slot: "9:00am - 12:00pm", available: true, price: 20 },
                    { slot: "12:00pm - 3:00pm", available: true, price: 20 },
                    { slot: "3:00pm - 6:00pm", available: true, price: 20 },
                ]
            },
            { 
                id: 3, 
                name: "Pine Valley Conservation Area", 
                timeSlots: [
                    { slot: "9:00am - 12:00pm", available: true, price: 18 },
                    { slot: "12:00pm - 3:00pm", available: true, price: 18 },
                    { slot: "3:00pm - 6:00pm", available: true, price: 18 },
                ]
            },
            { 
                id: 4, 
                name: "Riverbend Conservation Area", 
                timeSlots: [
                    { slot: "9:00am - 12:00pm", available: true, price: 22 },
                    { slot: "12:00pm - 3:00pm", available: true, price: 22 },
                    { slot: "3:00pm - 6:00pm", available: true, price: 22 },
                ]
            }
        ],
        reservations: []
    }
}