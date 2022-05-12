<template>
<div>
    <!-- Add funds Menu-->
    <div id="menu-add-funds" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Add Funds</h1><p class="color-highlight">Top off your Account</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content px-1">

            <div class="input-style input-style-always-active no-borders no-icon">
                <label for="f1" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Add Funds To</label>
                <select id="f1">
                    <option value="default" selected>Default Account</option>
                    <option value="1">Business Account</option>
                    <option value="2">Savings Account</option>
                </select>
                <span><i class="fa fa-chevron-down"></i></span>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em></em>
            </div>

            <div class="input-style input-style-always-active no-borders no-icon">
                <label for="f1a" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Add Funds From</label>
                <select id="f1a">
                    <option value="default" selected>Visa Credit Card</option>
                    <option value="1">Mater Card Limited</option>
                    <option value="2">PayPal Account</option>
                </select>
                <span><i class="fa fa-chevron-down"></i></span>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em></em>
            </div>

            <div class="input-style input-style-always-active validate-field no-borders no-icon">
                <input type="number" class="form-control validate-number" id="f3ab" placeholder="12,250">
                <label for="f3ab" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Amount in USD</label>
                <i class="fa fa-times disabled invalid color-red-dark"></i>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em>(required)</em>
            </div>
            <a href="#" class="close-menu btn btn-full btn-m bg-highlight rounded-sm text-uppercase font-800 mb-4">Add Funds</a>
        </div>
    </div>

    <!-- Recent Transactions Menus -->
    <div id="menu-transaction-1" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Payment Sent</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-3">
                    <img src="images/pictures/faces/1s.png" width="80" class="rounded-xl">
                </div>
                <div class="col-9 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme">To</p></div>
                        <div class="ms-auto"><p>John Doe</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme">From</p></div>
                        <div class="ms-auto"><p> Card **** 9431</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Type</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Payment Sent</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$530.24</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#123-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Status</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1 color-green-dark">Completed</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-blue-dark rounded-sm text-uppercase font-800 mb-3">Download PDF</a></div>
            </div>
        </div>
    </div>

    <!-- Recent Transactions Menus -->
    <div id="menu-transaction-2" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Payment Received</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-3">
                    <img src="images/pictures/faces/3s.png" width="80" class="rounded-xl">
                </div>
                <div class="col-9 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme">From</p></div>
                        <div class="ms-auto"><p>Sans Dude</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme">Via</p></div>
                        <div class="ms-auto"><p> Credit Card</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Type</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Payment Received</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$30.15</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Status</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1 color-green-dark">Completed</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-blue-dark rounded-sm text-uppercase font-800 mb-3">Download PDF</a></div>
            </div>
        </div>
    </div>

    <!-- Recent Transactions Menus -->
    <div id="menu-transaction-3" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Payment Request</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-3">
                    <img src="images/pictures/faces/4s.png" width="80" class="rounded-xl">
                </div>
                <div class="col-9 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme">From</p></div>
                        <div class="ms-auto"><p>Harry Gray</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme">Via</p></div>
                        <div class="ms-auto"><p> Credit Card</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Type</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Payment Request</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$140.21</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Status</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1 color-blue-dark">Pending</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-blue-dark rounded-sm text-uppercase font-800 mb-3">Download PDF</a></div>
            </div>
        </div>
    </div>


<!--
    <div id="menu-expense-1" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
    <div id="menu-expense-2" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
    <div id="menu-expense-3" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
    <div id="menu-expense-4" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
    -->
    <!-- General Expenses Menus -->

    <span v-for="(h, index) in history_pay">
        <div :id="'menu-expense-' + (index + 1)" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
    </span>
<!--
<div v-for="(h, index) in history_pay">
    <div :id="'menu-expense-' + (index + 1)" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Описание</h1><p class="color-highlight">детали платежа</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Услуга</p></div>
                        <div class="ms-auto"><p>{{ h.descript }}</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Дата</p></div>
                        <div class="ms-auto"><p>{{ h.date }}</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">


                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>


                <div class="col-6"><h4 class="font-14 mt-1">Сумма</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">{{ h.side_pay}}</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>


                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>


                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
</div>
-->
<!--
    <div id="menu-expense-2" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
    <div id="menu-expense-3" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Платеж</h1><p class="color-highlight">описание финансовой операции</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-red-dark"><i class="fa fa-mobile-alt font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Сервис</p></div>
                        <div class="ms-auto"><p>Интернет. Абонентская плата</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Дата</p></div>
                        <div class="ms-auto"><p>1 апреля 2022</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Описание</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Безлим-20Мбит</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Сумма</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">- ₴ 150 </h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
            </div>
            <div><a href="#" class="close-menu btn btn-full btn-m bg-highlight rounded-sm text-uppercase font-800 mb-3">Close</a></div>
        </div>
    </div>
    <div id="menu-expense-4" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Utility Expenses</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-yellow-dark"><i class="fa fa-bolt font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Electricty Bill</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">2 Weeks Payment</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$140.21 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
            </div>
            <div><a href="#" class="close-menu btn btn-full btn-m bg-highlight rounded-sm text-uppercase font-800 mb-3">Close</a></div>
        </div>
    </div>
-->



    <!-- Transfer Menus -->
    <div id="menu-transaction-transfer" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Send Funds</h1><p class="color-highlight">Enter Transaction Details</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mt-3 mb-3"></div>
        <div class="content px-1">

            <div class="input-style input-style-always-active no-borders no-icon">
                <label for="f1" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Select A Value</label>
                <select id="f1">
                    <option value="default" selected>Default Account</option>
                    <option value="1">Business Account</option>
                    <option value="2">Savings Account</option>
                </select>
                <span><i class="fa fa-chevron-down"></i></span>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em></em>
            </div>

            <div class="input-style input-style-always-active validate-field no-borders no-icon">
                <input type="email" class="form-control validate-email" id="f2a" placeholder=name@domain.com>
                <label for="f2a" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Receiver Email</label>
                <i class="fa fa-times disabled invalid color-red-dark"></i>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em>(required)</em>
            </div>

            <div class="input-style input-style-always-active validate-field no-borders no-icon">
                <input type="number" class="form-control validate-number" id="f3" placeholder="12,250">
                <label for="f3" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Amount in USD</label>
                <i class="fa fa-times disabled invalid color-red-dark"></i>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em>(required)</em>
            </div>
            <a href="#" class="close-menu btn btn-full btn-m bg-green-dark rounded-sm text-uppercase font-800 mb-4">Send Funds</a>
        </div>
    </div>

    <!-- Request Menus -->
    <div id="menu-transaction-request" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Request Funds</h1><p class="color-highlight">Enter Transaction Details</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mt-3 mb-2"></div>
        <div class="content px-1">
            <div class="input-style input-style-always-active validate-field no-borders no-icon">
                <input type="email" class="form-control validate-email" id="f2c" placeholder=name@domain.com>
                <label for="f2c" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Request From</label>
                <i class="fa fa-times disabled invalid color-red-dark"></i>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em>(required)</em>
            </div>

            <div class="input-style input-style-always-active validate-field no-borders no-icon">
                <input type="number" class="form-control validate-number" id="f3" placeholder="1000">
                <label for="f3" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Enter AMMOUNT</label>
                <i class="fa fa-times disabled invalid color-red-dark"></i>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em>(required)</em>
            </div>
            <a href="#" class="close-menu btn btn-full btn-m bg-blue-dark rounded-sm text-uppercase font-800 mb-4">Request Funds</a>
        </div>
    </div>


    <div id="menu-settings" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title mt-0 pt-0"><h1>Настройки</h1><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-n2"></div>
        <div class="content">
            <div class="list-group list-custom-small">
                <a href="#" data-toggle-theme data-trigger-switch="switch-dark-mode" class="pb-2 ms-n1">
                    <i class="fa font-12 fa-moon rounded-s bg-highlight color-white me-3"></i>
                    <span>Dark Mode</span>
                    <div class="custom-control scale-switch ios-switch">
                        <input data-toggle-theme type="checkbox" class="ios-input" id="switch-dark-mode">
                        <label class="custom-control-label" for="switch-dark-mode"></label>
                    </div>
                    <i class="fa fa-angle-right"></i>
                </a>
            </div>
            <div class="list-group list-custom-large">
                <a @click="logout" href="#">
                    <i class="fa font-14 fa-tint bg-green-dark rounded-s"></i>
                    <span>Выход</span>
                    <strong>lougout</strong>

                    <i class="fa fa-angle-right"></i>
                </a>

            </div>
        </div>
    </div>
    <!-- Menu Settings Highlights-->
    <div id="menu-highlights" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Highlights</h1><p class="color-highlight">Any Element can have a Highlight Color</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-n2"></div>
        <div class="content">
            <div class="highlight-changer">
                <a href="#" data-change-highlight="blue"><i class="fa fa-circle color-blue-dark"></i><span class="color-blue-light">Default</span></a>
                <a href="#" data-change-highlight="red"><i class="fa fa-circle color-red-dark"></i><span class="color-red-light">Red</span></a>
                <a href="#" data-change-highlight="orange"><i class="fa fa-circle color-orange-dark"></i><span class="color-orange-light">Orange</span></a>
                <a href="#" data-change-highlight="pink2"><i class="fa fa-circle color-pink2-dark"></i><span class="color-pink-dark">Pink</span></a>
                <a href="#" data-change-highlight="magenta"><i class="fa fa-circle color-magenta-dark"></i><span class="color-magenta-light">Purple</span></a>
                <a href="#" data-change-highlight="aqua"><i class="fa fa-circle color-aqua-dark"></i><span class="color-aqua-light">Aqua</span></a>
                <a href="#" data-change-highlight="teal"><i class="fa fa-circle color-teal-dark"></i><span class="color-teal-light">Teal</span></a>
                <a href="#" data-change-highlight="mint"><i class="fa fa-circle color-mint-dark"></i><span class="color-mint-light">Mint</span></a>
                <a href="#" data-change-highlight="green"><i class="fa fa-circle color-green-light"></i><span class="color-green-light">Green</span></a>
                <a href="#" data-change-highlight="grass"><i class="fa fa-circle color-green-dark"></i><span class="color-green-dark">Grass</span></a>
                <a href="#" data-change-highlight="sunny"><i class="fa fa-circle color-yellow-light"></i><span class="color-yellow-light">Sunny</span></a>
                <a href="#" data-change-highlight="yellow"><i class="fa fa-circle color-yellow-dark"></i><span class="color-yellow-light">Goldish</span></a>
                <a href="#" data-change-highlight="brown"><i class="fa fa-circle color-brown-dark"></i><span class="color-brown-light">Wood</span></a>
                <a href="#" data-change-highlight="night"><i class="fa fa-circle color-dark-dark"></i><span class="color-dark-light">Night</span></a>
                <a href="#" data-change-highlight="dark"><i class="fa fa-circle color-dark-light"></i><span class="color-dark-light">Dark</span></a>
                <div class="clearfix"></div>
            </div>
            <a href="#" data-menu="menu-settings" class="mb-3 btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-4">Back to Settings</a>
        </div>
    </div>
    <!-- Menu Settings Backgrounds-->
    <div id="menu-backgrounds" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Backgrounds</h1><p class="color-highlight">Change Page Color Behind Content Boxes</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-n2"></div>
        <div class="content">
            <div class="background-changer">
                <a href="#" data-change-background="default"><i class="bg-theme"></i><span class="color-dark-dark">Default</span></a>
                <a href="#" data-change-background="plum"><i class="body-plum"></i><span class="color-plum-dark">Plum</span></a>
                <a href="#" data-change-background="magenta"><i class="body-magenta"></i><span class="color-dark-dark">Magenta</span></a>
                <a href="#" data-change-background="dark"><i class="body-dark"></i><span class="color-dark-dark">Dark</span></a>
                <a href="#" data-change-background="violet"><i class="body-violet"></i><span class="color-violet-dark">Violet</span></a>
                <a href="#" data-change-background="red"><i class="body-red"></i><span class="color-red-dark">Red</span></a>
                <a href="#" data-change-background="green"><i class="body-green"></i><span class="color-green-dark">Green</span></a>
                <a href="#" data-change-background="sky"><i class="body-sky"></i><span class="color-sky-dark">Sky</span></a>
                <a href="#" data-change-background="orange"><i class="body-orange"></i><span class="color-orange-dark">Orange</span></a>
                <a href="#" data-change-background="yellow"><i class="body-yellow"></i><span class="color-yellow-dark">Yellow</span></a>
                <div class="clearfix"></div>
            </div>
            <a href="#" data-menu="menu-settings" class="mb-3 btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-4">Back to Settings</a>
        </div>
    </div>
    <!-- Menu Share -->
    <div id="menu-share" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title mt-n1"><h1>Share the Love</h1><p class="color-highlight">Just Tap the Social Icon. We'll add the Link</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="content mb-0">
            <div class="divider mb-0"></div>
            <div class="list-group list-custom-small list-icon-0">
                <a href="auto_generated" class="shareToFacebook external-link">
                    <i class="font-18 fab fa-facebook-square color-facebook"></i>
                    <span class="font-13">Facebook</span>
                    <i class="fa fa-angle-right"></i>
                </a>
                <a href="auto_generated" class="shareToTwitter external-link">
                    <i class="font-18 fab fa-twitter-square color-twitter"></i>
                    <span class="font-13">Twitter</span>
                    <i class="fa fa-angle-right"></i>
                </a>
                <a href="auto_generated" class="shareToLinkedIn external-link">
                    <i class="font-18 fab fa-linkedin color-linkedin"></i>
                    <span class="font-13">LinkedIn</span>
                    <i class="fa fa-angle-right"></i>
                </a>
                <a href="auto_generated" class="shareToWhatsApp external-link">
                    <i class="font-18 fab fa-whatsapp-square color-whatsapp"></i>
                    <span class="font-13">WhatsApp</span>
                    <i class="fa fa-angle-right"></i>
                </a>
                <a href="auto_generated" class="shareToMail external-link border-0">
                    <i class="font-18 fa fa-envelope-square color-mail"></i>
                    <span class="font-13">Email</span>
                    <i class="fa fa-angle-right"></i>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "fundsMenu",
    props: [
        'history_pay'
    ],
    mounted() {
        console.log('Component fundsMenu mounted')
    },
    methods: {

        logout() {

            axios.post('/logout')
                .then((response) => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({name: 'welcome'});
                    location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
}
</script>

