# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  # Your code Here
  @candidates.select do | k, v |
    k[:id] == id
  end
end


def experienced?(candidate)
  # Your code Here
  candidate[:years_of_experience] >= 2
end


def over_hundred_github_points?(candidate)
  candidate[:github_points] >=100
end


def ruby_or_python?(candidate)
  candidate[:languages].include?'Ruby' || candidate[:languages].include?'Python'
end


def date_applied?(candidate)
  candidate[:date_applied] > 15.days.ago
end


def age_over_17?(candidate)
  candidate[:age] > 17
end


def qualified_candidates(candidates)
  # Your code Here
  @candidates.select do | k, v |
    experienced?(candidate) &&
    over_hundred_github_points?(candidate) &&
    ruby_or_python?(candidate) &&
    age_over_17?(candidate) &&
    age?(candidate)
  end
end


def ordered_by_qualifications(candidates)
  final_list = candidates.sort_by do | candidate |
    [candidate[:years_of_experience], candidate[:github_points]]
  end
  final_list.reverse
end

