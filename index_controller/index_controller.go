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
	// template := params["partial"]
	template := "movies"
	Generic(rw, req, ren, tableData, template)
}

func Generic(rw http.ResponseWriter, req *http.Request, ren render.Render, data interface{}, template string) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	ren.HTML(200, template, data)

}
