<?php
session_start();
    include("functions.php");
    include("connection.php");
    $_SESSION;
    $user_data = check_login($conn);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="nav-container">
        <div class="nav-bar">
            <h1>load<span>out</span></h1>
            <div class="nav-holder">
                <div class="nav" data-cell>home</div>
                <div class="nav" data-cell>assault rifle</div>
                <div class="nav" data-cell>smg</div>
                <div class="nav" data-cell>lmg</div>
                <div class="nav" data-cell>shotgun</div>
                <div class="nav" data-cell>sniper</div>
                <div class="nav" data-cell>marksman</div>
                <div class="nav" data-cell>pistol</div>

            </div>
        </div>
        <div class="current-page">
            <div id="currentpage" class="current">what's new</div>
        </div>
        <div class="content">
            <div class="content-holder">
                <div class="header-container">
                    <div class="header">
                        <ul class="header-nav">
                            <li><button id="prev" href="">prev</button></li>
                            <div class="select-container">
                                <select name="" id="gunName">
                                </select>
                            </div>
                            <li><button id="next" href="">next</button></li>
                        </ul>
                    </div>
                </div>
                <div class="loadout-holder">
                    <div class="gunsmith">
                        <div class="top-part">
                            <div class="image-part">
                                <img id="image" src="css/assault/ak.jpg" alt="gun-Image">
                            </div>
                        </div>
                        <div class="bottom-part">
                            <div class="layers">
                                <div class="drop">
                                    <a href="">barell</a>
                                    <select name="" id="barrel"></select>
                                </div>
                                <div class="drop">
                                    <a href="">scope</a>
                                    <select name="" id="scope"></select>
                                </div>
                                <div class="drop">
                                    <a href="">stock</a>
                                    <select name="" id="stock"></select>
                                </div>
                            </div>
                            <div class="layers">
                                <div class="drop">
                                    <a href="">muzzle</a>
                                    <select name="" id="muzzle"></select>
                                </div>
                                <div class="drop">
                                    <a href="">perk</a>
                                    <select name="" id="perk"></select>
                                </div>
                                <div class="drop">
                                    <a href="">laser</a>
                                    <select name="" id="laser"></select>
                                </div>
                            </div>
                            <div class="layers">
                                <div class="drop">
                                    <a href="">rear-grip</a>
                                    <select name="" id="rear-grip"></select>
                                </div>
                                <div class="drop">
                                    <a href="">magazine</a>
                                    <select name="" id="magazine"></select>
                                </div>
                                <div class="drop">
                                    <a href="">fore-grip</a>
                                    <select name="" id="fore-grip"></select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="stat">
                        <h3>stats</h3>
                        <div class="cell-holder">
                            <div class="layer">
                                <div class="cell">
                                    <h2>damage</h2>
                                    <h1 id="damage">0</h1>
                                </div>
                                <div class="cell">
                                    <h2>firerate</h2>
                                    <h1 id="firerate">0</h1>
                                </div>
                            </div>
                            <div class="layer">
                                <div class="cell">
                                    <h2>accuracy</h2>
                                    <h1 id="accuracy">0</h1>
                                </div>
                                <div class="cell">
                                    <h2>mobility</h2>
                                    <h1 id="mobility">0</h1>
                                </div>
                            </div>
                            <div class="layer">
                                <div class="cell">
                                    <h2>range</h2>
                                    <h1 id="range">0</h1>
                                </div>
                                <div class="cell">
                                    <h2>control</h2>
                                    <h1 id="control">0</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</body>
<script src="/css/main.js"></script>

</html>