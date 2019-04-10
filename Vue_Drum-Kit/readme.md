Ｖue.js 解題 30天

1. 產生按件
   v-for 從 data keys 物件撈出所有資料

````javascript
data: {
      keys: [
        {keyCode: 65, keyName: "A", soundName: "clap", audio: new Audio("sounds/clap.wav"), isPlaying: false}
]
}
````

2. ：key
  列表key值

  https://cn.vuejs.org/v2/guide/list.html#key

3. :class 與style樣式綁定

   https://v1-cn.vuejs.org/guide/class-and-style.html
   V-bind:class
   V-bind:style

4. @transitionend 監聽過度動畫
   https://v1-cn.vuejs.org/guide/transitions.html

5. 程式邏輯部分

   El 掛載＃app 執行vue.js部分

   Data: 放入keys資訊在網頁上ＤＯＭ渲染出來

   Methods 放入要執行的函示

   removeTransition 監聽按下事件 

   按下放開 如果沒有沒有transform 屬性就回傳

   播放音效就停止

   playSound函式判斷按鈕的keyCode決定播放的音效

   呼叫key.audio 方法 currentTime ,play()播放音效

   

   6. Mounted 掛載ＤＯＭ 事件監聽鍵盤事件執行playSound方法

   

   






