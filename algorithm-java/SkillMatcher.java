import java.util.HashSet;
import java.util.Set;

public class SkillMatcher {

    public static int calculateSkillScore(
            Set<String> candidateSkills,
            Set<String> interviewerSkills
    ) {
        int score = 0;

        for (String skill : candidateSkills) {
            if (interviewerSkills.contains(skill)) {
                score++;
            }
        }
        return score;
    }

    public static void main(String[] args) {

        Set<String> candidateSkills = new HashSet<>();
        candidateSkills.add("Java");
        candidateSkills.add("DSA");
        candidateSkills.add("SQL");

        Set<String> interviewerSkills = new HashSet<>();
        interviewerSkills.add("Java");
        interviewerSkills.add("System Design");

        int matchScore = calculateSkillScore(candidateSkills, interviewerSkills);

        System.out.println("Skill Match Score: " + matchScore);
    }
}
