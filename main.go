// 这是专门拿取页面
package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

var url string = "https://unpkg.com/babel-standalone@6.15.0/babel.min.js"

func main(){
	working();
}

func working(){
	fmt.Println("开始爬取页面。。。")
	httpGet();
	fmt.Println("爬取完成....");
}

func httpGet(){
	resp,err1 := http.Get(url);
	f,ferr := os.Create("babel.min.js");
	if ferr != nil{
		fmt.Println("ferr = ",ferr);
		return;
	}
	if err1 != nil{
		fmt.Println("err1=",err1);
		return;
	}
	defer resp.Body.Close();
	defer f.Close();
	buf := make([]byte, 4096)
	for{
		n,err2 := resp.Body.Read(buf);
		if n == 0{
			break;
		}
		if err2 !=nil && err2 != io.EOF{
			fmt.Println("err2 = ",err2);
			return;
		}
		f.Write(buf[:n]);	
	}
}