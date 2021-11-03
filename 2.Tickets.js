function tickets(arrayOfTickets, sortArg) {

    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    class Tickets {

        constructor() {
            this.tickets = [];
        }

        newTicket(arrayOfTickets) {

            arrayOfTickets.forEach(info => {
                let [destination, price, status] = info.split('|');
                this.tickets.push(new Ticket(destination, price, status));
            });
        }

        sortByCriteria(sortArg) {
            this.tickets.sort((a, b) => a[sortArg].localeCompare(b[sortArg]));
        }

    }

    let tickets = new Tickets();
    tickets.newTicket(arrayOfTickets);
    tickets.sortByCriteria(sortArg);
    return tickets;
}

let result = tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');


