(function () {
    "use strict"

    var tickets = [{
            from: {
                code: 10000,
                town: 'Veliko Tyrnovo'
            },
            to: {
                code: 11000,
                town: 'Karlovo'
            }
        },
        {
            from: {
                code: 9000,
                town: 'Stara Zagora'
            },
            to: {
                code: 10000,
                town: 'Veliko Tyrnovo'
            }
        },
        {
            from: {
                code: 4000,
                town: 'Plovdiv'
            },
            to: {
                code: 1000,
                town: 'Sofia'
            }
        },
        {
            from: {
                code: 5000,
                town: 'Varna'
            },
            to: {
                code: 3000,
                town: 'Pleven'
            }
        },
        {
            from: {
                code: 1000,
                town: 'Sofia'
            },
            to: {
                code: 6000,
                town: 'Silistra'
            }
        },
        {
            from: {
                code: 6000,
                town: 'Silistra'
            },
            to: {
                code: 5000,
                town: 'Varna'
            }
        },
        {
            from: {
                code: 3000,
                town: 'Pleven'
            },
            to: {
                code: 7000,
                town: 'Russe'
            }
        },
        {
            from: {
                code: 11000,
                town: 'Karlovo'
            },
            to: {
                code: 12000,
                town: 'Pazardzik'
            }
        },
        {
            from: {
                code: 8000,
                town: 'Burgas'
            },
            to: {
                code: 9000,
                town: 'Stara Zagora'
            }
        },
        {
            from: {
                code: 7000,
                town: 'Russe'
            },
            to: {
                code: 8000,
                town: 'Burgas'
            }
        },

    ];

    let path = [];

    const buildPath = () => {
        if (tickets.length == 0) return;
        while (tickets.length > 0) {
            let allFrom = [];
            let allTo = [];
            for (const {from: {code: f},to: {code: t}} of tickets) {
                allFrom = [...allFrom, f];
                allTo = [...allTo, t];
            };
            let first = tickets.filter((ticket, index) => {
                if (!allTo.includes(ticket.from.code)) {
                    tickets.splice(index, 1);
                    return ticket;
                };
                return null;
            })
            path = [...path, first];
        }
        /**If we remove the while cycle and call buildPath() at this line the solution will be recursive, which doesn't provide better perfomance in case with big arrays than the iterative one 
         * buildPath();
         */
    };

    const typePath = () => {
        path.forEach((destination, index) => {
            if (index != path.length - 1) {
                console.log(destination[0].from.town + "\n")
            } else {
                console.log(destination[0].from.town + "\n");
                console.log(destination[0].to.town + "\n");
            }
        })
    }
    const Init = () => {
        buildPath();
        typePath();
    }
    Init();
})()