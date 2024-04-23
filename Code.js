<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save Money With MeepHands</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9f9f9;
            color: #000;
            margin: 0;
            padding: 0;
        }
        #container {
            max-width: 600px;
            margin: 50px auto;
            padding: 40px;
            background-color: #fff;
            border-radius: 20px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        h1, h3 {
            text-align: center;
            color: #4caf50;
        }
        input[type="text"] {
            width: calc(100% - 20px);
            padding: 15px;
            margin-top: 15px;
            margin-bottom: 30px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 20px;
        }
        label {
            font-weight: bold;
            color: #555;
        }
        button {
            display: block;
            width: calc(100% - 20px);
            padding: 15px;
            margin: 0 auto;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 24px;
            text-transform: uppercase;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #45a049;
        }
        #output {
            text-align: center;
            margin-top: 40px;
            font-size: 30px;
            color: #4caf50;
        }
        .footer {
            margin-top: 50px;
            text-align: center;
            color: #777;
            font-size: 14px;
        }
        .footer a {
            color: #4caf50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div id="container">
        <h1>The Saving Calculator</h1>
        <form>
            <label for="amount">Enter Your Monthly Saving Amount:</label>
            <input type="text" id="amount" placeholder="Enter amount in JD">

            <label for="rate">Enter Your Annual Interest Rate (%):</label>
            <input type="text" id="rate" placeholder="Enter interest rate">

            <label for="years">Enter The Number of Years You'll Save:</label>
            <input type="text" id="years" placeholder="Enter number of years">

            <button type="button" onclick="Calculate()">Calculate Your Savings</button>
        </form>
        <h3 id="output">See How Much You'll Save...</h3>
    </div>

    <div class="footer">
        Made with ❤️ by MeepHands. <br>
        <a href="https://meephands.com">Learn more about us</a>
    </div>

    <script>
        function Calculate() {
            var amount = parseFloat(document.getElementById("amount").value);
            var rate = parseFloat(document.getElementById("rate").value);
            var years = parseInt(document.getElementById("years").value);
            var total = amount * 12;
            for (var n = 0; n < years; n++) {
                total = total * (1 + rate / 100);
            }
            document.getElementById("output").innerHTML =
                "After " + years + " years, you'll have saved: " + total.toFixed(2) + " JD";
        }
    </script>
</body>
</html>
