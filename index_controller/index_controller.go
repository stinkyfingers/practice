package index_controller

import (
	"github.com/go-martini/martini"
	"github.com/martini-contrib/render"

	// "log"
	"net/http"
)

func Index(rw http.ResponseWriter, req *http.Request, ren render.Render) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "index"
	Generic(rw, req, ren, tableData, template)
}

func Index2(rw http.ResponseWriter, req *http.Request, ren render.Render) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "index2"
	Generic(rw, req, ren, tableData, template)
}

func Angular(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	// template := params["partial"]
	template := "angular"
	Generic(rw, req, ren, tableData, template)
}

func Params(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := params["partial"]
	// template := "angular"
	Generic(rw, req, ren, tableData, template)
}

func Movies(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "movies"
	Generic(rw, req, ren, tableData, template)
}

func Music(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "iTunes"
	Generic(rw, req, ren, tableData, template)
}

func Imgur(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "imgur"
	Generic(rw, req, ren, tableData, template)
}
func Twitter(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "twitter"
	Generic(rw, req, ren, tableData, template)
}
func Calendar(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "calendar"
	Generic(rw, req, ren, tableData, template)
}
func Calendar2(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "calendar2"
	Generic(rw, req, ren, tableData, template)
}

func Auth(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	tableData := ""
	template := "calendar"
	Generic(rw, req, ren, tableData, template)
}
func Finance(rw http.ResponseWriter, req *http.Request, ren render.Render, params martini.Params) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	rw.Header().Set("Access-Control-Allow-Headers", "XAUTH")
	rw.Header().Set("Access-Control-Allow-Methods", "GET")
	rw.Header().Set("Access-Control-Allow-Methods", "POST")
	rw.Header().Set("Access-Control-Allow-Methods", "PUT")
	rw.Header().Set("Access-Control-Allow-Methods", "DELETE")
	tableData := ""
	template := "finance"
	Generic(rw, req, ren, tableData, template)
}

func Generic(rw http.ResponseWriter, req *http.Request, ren render.Render, data interface{}, template string) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	ren.HTML(200, template, data)

}
