module Main exposing (main)

import Browser
import Content exposing (slides)
import Html exposing (Html)
import Presentation exposing (Presentation)


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.map PresentAction Presentation.subscriptions
        }


type alias Model =
    { presentationState : Presentation () Msg
    }


init : () -> ( Model, Cmd msg )
init _ =
    ( { presentationState = Presentation.create Content.slides
      }
    , Cmd.none
    )


type Msg
    = PresentAction Presentation.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        PresentAction presentMsg ->
            ( { model
                | presentationState = Presentation.update presentMsg model.presentationState
              }
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    Presentation.view PresentAction model.presentationState
