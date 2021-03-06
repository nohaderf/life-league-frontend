import React from "react"
import { Link } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"


function Rules(){
    return (
        <div className= "main-div">
            <div className= "rules-div">
                <h1>TL;DR</h1>
                <div className="rules-basics">    
                    <p>It's a game of integrity.</p>
                    <p>Earn <strong>one</strong> point for every logged <strong>30-minutes </strong> dedicated towards a goal.</p>
                    <p>The player with the most points at the end of the league, wins.</p>



                </div>
                <h1>THE BASICS</h1>
                <div className="rules-basics">    
                    <ol>
                        <li>The player who creates the league is the commissioner. The commissioner oversees the league.</li>
                        <li>There needs to be at least two players. The more, the merrier.</li>
                        <li>Players of the league (or the commissioner) will decide on the time frame of the league. The time frame can be chosen between four, six, or eight weeks.</li>
                        <li>One point will be given for every 30 minutes a player logs in their Goal progress. The points earned will be counted towards an overall total. Points will only increment by one. So, if you dedicated 45 mins, you will still only be rewarded 1 point.</li>
                        {/* <li>A player must log their progress on the day-of in order to earn points for the day. Players forfeit the chance to log daily results, and to claim points, if not logged by 11:59PM.</li> */}
                        <li>Logging points is primarily based on a honor system. A player’s claims must be attested if other players of the league, or the commissioner, request proof or evidence.</li>
                        <li>The higher the points, the higher the rank. The player with the most points by the end of the league, wins.</li>
                    </ol>                       
                </div>

                {/* <h1>GOALS</h1>
                <div className="rules-tasks">    
                    <ol>
                        <li>All goals and progress in a player's roster will be counted in any league the player is a part of.</li>
                        <li>New goals can be added at any time.</li>
                        <li>A player can start logging and earning points under a goal as soon as it is created.</li>
                        <li>Points earned from a deleted goal mid-league will <em>not</em> be removed from the player's total.</li> */}
                        {/* <li>Tasks are actions to be done in order to work towards a player's goal.</li>
                        <li>Tasks are decided and set upon the start of each league. They cannot be changed after the league starts.</li>
                        <li>More than one task can be added to a player’s roster</li>
                        <li>Players of the league (or the commissioner) will decide on Goal Categories. See more about Goal Categories down below.</li>
                        <li>Each player can decide on at beginning of the week (week-to-week basis) whether to bench a particular Task or to put a Task into their lineup. Hint: A player may want to change their lineup depending on who they’re going up against that week.</li>
                        <li>All Tasks in a player’s weekly lineup must be given status updates to gain points. Benched Tasks stand idle and will not gain or deduct player points.</li> */}
                    {/* </ol>                       
                </div> */}
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Rules;