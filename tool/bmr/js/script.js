function Calculate() {
        var ht = parseFloat(document.cal_frm.txtHeight.value);
        var wt = parseFloat(document.cal_frm.txtWeight.value);
        var ag = parseInt(document.cal_frm.txtAge.value);
        var sexf = false;
        if (document.cal_frm.opGender.value == "1") {
            sexf = true;
        }
        document.getElementById('feedback').innerHTML = '';
        var errors = '';
        if ((ht < 122) || (ht > 230) || isNaN(ht)) {
            err = '122cm đến 230cm';
            errors += 'Chiều cao phải từ ' + err + '!<br>';
        }
        if ((wt < 30) || (wt > 150) || isNaN(wt)) {
            err = '30Kg đến 150Kg';
            errors += 'Cân nặng phải từ ' + err + '!<br>';
        }
        if ((ag < 19) || (ag > 70) || isNaN(ag)) {
            err = '19 đến 70';
            errors += 'Tuổi phải từ ' + err + '!<br>';
        }
        if (errors) {
            alert('Thông tin nhập vào chưa chính xác:<br><br>' + errors);
            return;
        }
        var fatOw = 18;
        var fatOb = 25;
        var bstate = true;
        var BMR;
        var fatpercent;
        var w1;
        var s1;
        var BMI = Math.round((wt * 10000 / (ht * ht)) * 10) / 10;
        if (sexf == true) {
            fatOw = 25;
            fatOb = 31;
            BMR = 655 + (9.6 * wt) + (1.8 * ht) - (4.7 * ag);
        } else {
            BMR = 66 + (13.7 * wt) + (5 * ht) - (6.8 * ag);
        }
        BMR = Math.round(BMR * 10) / 10;
        var dailyCal;
        if (document.cal_frm.opActivity.value == "0") {
            dailyCal = BMR * 1.2;
        }
        if (document.cal_frm.opActivity.value == "1") {
            dailyCal = BMR * 1.375;
        }
        if (document.cal_frm.opActivity.value == "2") {
            dailyCal = BMR * 1.55;
        }
        if (document.cal_frm.opActivity.value == "3") {
            dailyCal = BMR * 1.725;
        }
        if (document.cal_frm.opActivity.value == "4") {
            dailyCal = BMR * 1.9;
        }
        document.getElementById('feedback').innerHTML = "<p>Chỉ số BMI của bạn là: " + BMI + "<br />" + "Chỉ số BMR của bạn là: " + BMR +
	"<br />" + "Lượng Calorie tối thiểu hàng ngày: " + (Math.round(dailyCal)) + "<br /></p>";
    }

    function logten(v) {
        return (Math.log(v) / Math.log(10));
    }

    function resetAll() {
            document.getElementById('feedback').innerHTML = '';
        }
        -->

	function alert(val)
		{
		    $("#thongbaoloi").show();
		    $("#thongbaoloi").html(val);
		}
		$(document).ready(function() {
			closeModal();
		});