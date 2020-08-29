let resturant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 5,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount;
        // console.log(this)
        return seatsLeft;
        // console.log(partySize)
    }
}

let status = resturant.checkAvailability("Ariful Islam")
console.log(status)