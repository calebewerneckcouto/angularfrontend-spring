export class AppConstants {

	public static get baseServidor(): string { return "https://cwc3d.net/springrestapi" }

	public static get baseLogin(): string { return this.baseServidor + "/login" }

	public static get baseUrl(): string { return this.baseServidor + "/usuario/" }

	public static get getBaseUrlPath(): string { return this.baseServidor + "/" }





}
