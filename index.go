package index

import (
	"github.com/go-martini/martini"
	"github.com/martini-contrib/render"
	"index_controller"
	"test_controller"
	// "github.com/stinkyfingers/practice/index_controller"
	// "github.com/stinkyfingers/practice/test_controller"

	"html/template"
	// "log"
	"net/http"
)

func init() {
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
	m.Get("", index_controller.Index)
	m.Get("/index", index_controller.Index)
	m.Get("/index2", index_controller.Index2)
	m.Get("/angular", index_controller.Angular)
	m.Get("/angular/partials/:partial", index_controller.Params)
	m.Get("/movies", index_controller.Movies)
	m.Get("/finance", index_controller.Finance)
	m.Get("/music", index_controller.Music)
	m.Get("/imgur", index_controller.Imgur)
	m.Get("/calendar", index_controller.Calendar)
	m.Get("/calendar2", index_controller.Calendar2)
	m.Get("/oauth2callback", index_controller.Calendar)
	m.Get("/twitter", index_controller.Twitter)

	m.Get("/test", test_controller.Test)
	// m.Get("/", test_controller.Test)
	// r.Get("/youtube", youtube_controller.Youtube)
	// m.Get("/demos", panorama_controller.Panorama)
	// log.Fatal(http.sListenAndServe(":8080", m))
	http.Handle("/", m)
}

// func init() {
// 	http.HandleFunc("/", handler)
// }

// func handler(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprint(w, "Welcome from the language of the coming decade - Go!")
// }

// func init() {
// 	m := martini.Classic()
// 	m.Get("/hw", test_controller.Test)
// 	http.Handle("/", m)
// }
