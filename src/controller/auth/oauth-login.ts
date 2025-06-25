import { supabase } from "../../config/supabase";
import { badRequest, redirect } from "../helpers/http";
import { HttpRequest } from "../../types/httpRequest";

export class OAuthLoginController {
  async execute(httpRequest: HttpRequest) {
    const provider = httpRequest.params?.provider;

    if (!provider) {
      return badRequest("Provedor de autenticação não especificado");
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as any,
      options: {
        redirectTo: `${process.env.FRONT_END_APP_API}/callback`,
      },
    });

    if (error) {
      return badRequest("Falha na autenticação");
    }

    return redirect(data.url);
  }
}
