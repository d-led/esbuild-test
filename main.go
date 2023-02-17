package main

import (
	"fmt"
	"os"

	"github.com/evanw/esbuild/pkg/api"
)

func main() {
	result := api.Build(api.BuildOptions{
		EntryPoints: []string{
			"src/main.ts",
		},
		Outdir: "dist",
		Format: api.FormatIIFE,
		Bundle: true,
		// MinifyWhitespace:  true,
		// MinifyIdentifiers: true,
		Banner: map[string]string{
			"js": `/* this file is generated! do not edit! */`,
		},
		MinifySyntax: true,
		Engines: []api.Engine{
			{api.EngineChrome, "58"},
			{api.EngineFirefox, "57"},
			{api.EngineSafari, "11"},
			{api.EngineEdge, "16"},
		},
		Inject: []string{},
		Write:  true,
	})
	handleErrors(result.Errors)
}

func handleErrors(errors []api.Message) {
	for _, msg := range errors {
		if msg.Location != nil {
			fmt.Printf(
				"%s:%v:%v: %s\n",
				msg.Location.File,
				msg.Location.Line,
				msg.Location.Column,
				msg.Text,
			)
		} else {
			fmt.Println(msg)
		}
	}

	if len(errors) > 0 {
		os.Exit(1)
	}
}
