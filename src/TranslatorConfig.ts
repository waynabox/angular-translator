import { TranslateLogHandler } from "./TranslateLogHandler";
import { TranslationLoader } from "./TranslationLoader";
import { TranslationLoaderJson } from "./TranslationLoader/Json";

import {
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    JsonPipe,
    LowerCasePipe,
    PercentPipe,
    SlicePipe,
    TitleCasePipe,
    UpperCasePipe,
} from "@angular/common";
import { PipeTransform, Type } from "@angular/core";

export const COMMON_PURE_PIPES: Array<Type<PipeTransform>> = [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    JsonPipe,
    LowerCasePipe,
    PercentPipe,
    SlicePipe,
    TitleCasePipe,
    UpperCasePipe,
];

export const COMMON_PURE_PIPES_MAP: { [key: string]: Type<PipeTransform> } = {
    currency: CurrencyPipe,
    date: DatePipe,
    number: DecimalPipe,
    json: JsonPipe,
    lowercase: LowerCasePipe,
    percent: PercentPipe,
    slice: SlicePipe,
    titlecase: TitleCasePipe,
    uppercase: UpperCasePipe,
};

export class TranslatorConfig {
    public static navigator: any = typeof window === "object" && window.navigator ? window.navigator : {};

    private static isoRegEx = /^([A-Za-z]{2})(?:[.\-_\/]?([A-Za-z]{2}))?$/;

    /**
     * Normalize a language
     *
     * @param {string} languageString
     * @returns {string}
     */
    private static normalizeLanguage(languageString: string): string {
        if (!languageString.match(TranslatorConfig.isoRegEx)) {
            return languageString;
        }
        return languageString.replace(
            TranslatorConfig.isoRegEx,
            (substring: string, language: string, country: string = "") => {
                language = language.toLowerCase();
                country = country.toUpperCase();
                return country ? language + "-" + country : language;
            },
        );
    }

    private options: { [key: string]: any } = {
        defaultLanguage:    "en",
        providedLanguages:  ["en"],
        detectLanguage:     true,
        preferExactMatches: false,
        navigatorLanguages: ["en"],
        loader:             TranslationLoaderJson,
        pipes:               Object.keys(COMMON_PURE_PIPES_MAP).map((key) => COMMON_PURE_PIPES_MAP[key]),
        pipeMap:            (() => {
            let pipes = {};
            for (let pipeName in COMMON_PURE_PIPES_MAP) {
                if (COMMON_PURE_PIPES_MAP.hasOwnProperty(pipeName)) {
                    pipes[pipeName] = COMMON_PURE_PIPES_MAP[pipeName];
                }
            }
            return pipes;
        })(),
    };

    private moduleName: string;

    private pipeMap: { [key: string]: Type<PipeTransform> };

    constructor(
        private logHandler: TranslateLogHandler,
        options?: any,
        module?: string,
    ) {
        this.options.navigatorLanguages = ((): string[] => {
            let navigator: any = TranslatorConfig.navigator;

            if (navigator.languages instanceof Array) {
                return Array.prototype.slice.call(navigator.languages);
            } else {
                return [
                    navigator.languages ||
                    navigator.language ||
                    navigator.browserLanguage ||
                    navigator.userLanguage,
                ].filter((v) => {
                    return typeof v === "string";
                });
            }
        })();

        this.setOptions(options);
        this.moduleName = module;
    }

    get defaultLanguage(): string {
        return this.options.defaultLanguage;
    }

    get providedLanguages(): string[] {
        return this.options.providedLanguages;
    }

    get loader(): Type<TranslationLoader> {
        return this.options.loader;
    }

    get loaderOptions(): any {
        return this.options.loaderOptions || {};
    }

    get detectLanguage(): boolean {
        return this.options.detectLanguage;
    }

    get preferExactMatches(): boolean {
        return this.options.preferExactMatches;
    }

    get navigatorLanguages(): string[] {
        return this.options.navigatorLanguages;
    }

    get pipes(): { [key: string]: Type<PipeTransform> } {
        if (!this.pipeMap) {
            this.pipeMap = this.options.pipeMap;
            const mappedPipes = Object.keys(this.pipeMap).map((key) => this.pipeMap[key]);
            const unmappedPipes = this.options.pipes.filter((pipe) => mappedPipes.indexOf(pipe) === -1);
            while (unmappedPipes.length) {
                let pipe = unmappedPipes.shift();
                if (pipe.pipeName) {
                    this.pipeMap[pipe.pipeName] = pipe;
                } else {
                    this.logHandler.error("Pipe name for " + pipe.name + " can not be resolved");
                }
            }
        }

        return this.pipeMap;
    }

    /**
     * Overwrite the options.
     *
     * @param {any} options
     */
    public setOptions(options: { [key: string]: any }): void {
        for (let key in options) {
            if (!options.hasOwnProperty(key)) {
                continue;
            }

            if (key === "pipes") {
                this.options.pipes.push(...options.pipes.filter((pipe) => {
                    return this.options.pipes.indexOf(pipe) === -1;
                }));
            } else if (key === "pipeMap") {
                for (let pipeName in options.pipeMap) {
                    if (options.pipeMap.hasOwnProperty(pipeName)) {
                        this.options.pipeMap[pipeName] = options.pipeMap[pipeName];
                    }
                }
            } else {
                this.options[key] = options[key];
            }
        }

        if (this.options.providedLanguages.indexOf(this.options.defaultLanguage) === -1) {
            this.options.defaultLanguage = this.options.providedLanguages[0];
        }
    }

    /**
     * Checks if given language "language" is provided and returns the internal name.
     *
     * The checks running on normalized strings matching this pattern: /[a-z]{2}(-[A-Z]{2})?/
     * Transformation is done with this pattern: /^([A-Za-z]{2})([\.\-_\/]?([A-Za-z]{2}))?/
     *
     * If strict is false it checks country independent.
     *
     * @param {string} language
     * @param {boolean?} strict
     * @returns {string|boolean}
     */
    public providedLanguage(language: string, strict: boolean = false): string | boolean {
        let providedLanguagesNormalized = this.providedLanguages.map(TranslatorConfig.normalizeLanguage);
        language = TranslatorConfig.normalizeLanguage(language);

        let p: number = providedLanguagesNormalized.indexOf(language);
        if (p > -1) {
            return this.providedLanguages[p];
        } else if (!strict && language.match(TranslatorConfig.isoRegEx)) {
            language = language.substr(0, 2);
            p = providedLanguagesNormalized.indexOf(language);
            if (p > -1) {
                return this.providedLanguages[p];
            } else {
                p = providedLanguagesNormalized
                    .map((l) => {
                        return l.match(TranslatorConfig.isoRegEx) ? l.substr(0, 2) : l;
                    })
                    .indexOf(language);
                if (p > -1) {
                    return this.providedLanguages[p];
                }
            }
        }

        return false;
    }

    /**
     * Get the configuration for module.
     *
     * @param {string} module
     * @returns {TranslatorConfig}
     */
    public module(module: string) {
        if (this.moduleName) {
            throw new Error("Module configs can not be stacked");
        }

        let moduleConfig = new TranslatorConfig(this.logHandler, this.options, module);

        if (this.options.modules && this.options.modules[module]) {
            moduleConfig.setOptions(this.options.modules[module]);
        }

        return moduleConfig;
    }
}
