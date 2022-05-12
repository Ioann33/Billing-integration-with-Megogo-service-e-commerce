<template>
    <div id="page">

    <nav-bar></nav-bar>


    <div class="page-content pb-5 mb-2">
        <div class="footer card">
            <a href="#" class="footer-title"><span class="color-highlight">Homenet.Online</span></a>
            <p class="footer-text"><span>Интернет <i class="fa fa-heart color-highlight font-16 ps-2 pe-2"></i> вашему дому</span><br><br>

                <span><h4>Служба турботи про клієнтів</h4></span><br>
                <span><h3>Підтримка 24/7</h3></span><br>
                <a href="tel:0567199000">(056) 71-99-000</a><br>
                <a href="tel:0737199000">(073) 71-99-000</a><br>
                <a href="tel:0997199000">(099) 71-99-000</a><br>
                <a href="tel:0687199000">(068) 71-99-000</a><br>
                <a href="mailto:info@homenet.it">info@homenet.it</a> <br>
                <br>
                <span><h4>Відділ продажу</h4></span><br>
                +38 (050) 487-57-20<br>
                Оплата та квітанції<br>
                <a href="mailto:ao@homenet.it">ao@homenet.it</a> <br>
            </p>
            <div class="text-center mb-3">
                <a href="https://www.facebook.com/hnet.dp.ua" class="icon icon-xs rounded-sm shadow-l me-1 bg-facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/homenet.it_dnipro/" class="icon icon-xs rounded-sm shadow-l me-1 bg-instagram"><i class="fab fa-instagram"></i></a>
                <a href="mailto:support@homenet.it" class="icon icon-xs rounded-sm shadow-l me-1 bg-instagram"><i class="fa fa-envelope "></i></a>
                <a href="tel:0567199000" class="icon icon-xs rounded-sm shadow-l me-1 bg-phone"><i class="fa fa-phone"></i></a>
                <a href="#" class="back-to-top icon icon-xs rounded-sm shadow-l bg-dark-light"><i class="fa fa-angle-up"></i></a>
            </div>
<!--            <p class="footer-copyright">Copyright &copy; Enabled <span id="copyright-year">2022</span>. All Rights Reserved.</p>-->
            <p class="footer-links"><a href="#" class="color-highlight">Privacy Policy</a> | <a href="#" class="color-highlight">Terms and Conditions</a> | <a href="#" class="back-to-top color-highlight"> Back to Top</a></p>
            <div class="clear"></div>
        </div>

    </div>

    <nav-bar-menu></nav-bar-menu>
</div>
</template>

<script>
import headBar from "../components/headBar";
import navBar from "../components/navBar";
import navBarMenu from "../components/navBarMenu";

export default {
    name: "News",
    components: {
        headBar, navBar, navBarMenu
    },
    updated() {
        init_template2()
    }
}
</script>

