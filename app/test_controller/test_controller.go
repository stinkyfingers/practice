package test_controller

import (
	// "github.com/go-martini/martini"
	// "fmt"
	"github.com/martini-contrib/render"
	// "log"
	"net/http"
)

func Test(rw http.ResponseWriter, req *http.Request, ren render.Render) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "index"
	Generic(rw, req, ren, tableData, template)
}
func Generic(rw http.ResponseWriter, req *http.Request, ren render.Render, data interface{}, template string) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	ren.HTML(200, template, data)

}

// func Test(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprint(w, "This is the test page!")

// }
