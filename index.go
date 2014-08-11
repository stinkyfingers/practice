package main

import (
	"github.com/go-martini/martini"
	"github.com/martini-contrib/render"
	"github.com/stinkyfingers/practice/index_controller"
	"html/template"
	"log"
	"net/http"
)

func main() {
	m := martini.Classic()

	//set options for martini-contrib/render middleware
	m.Use(render.Renderer(render.Options{ //rendering middleware
		Directory:  "public/templates",
		Layout:     "main", //was main
		Extensions: []string{".tmpl", ".html"},
		Funcs: []template.FuncMap{
			{
				"getMoney": func(a, b int) int {
					return (a + b)
				},
				//"getMoreMoney": funcmap.TestFunc,
			},
		},
		Delims:          render.Delims{"[[", "]]"},
		Charset:         "UTF-8",
		IndentJSON:      true,
		HTMLContentType: "text/html",
	}))

	//Actual Routes - uncomment to do it right
	m.Get("/index", index_controller.Index)
	m.Get("/index2", index_controller.Index2)
	m.Get("/angular", index_controller.Angular)
	// m.Get("/angular/partials/:partial", index_controller.Params)

	// r.Get("/youtube", youtube_controller.Youtube)
	// m.Get("/demos", panorama_controller.Panorama)
	log.Fatal(http.ListenAndServe(":8080", m))
}
